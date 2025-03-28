import { allowedHTMLElements } from "@/constants/htmlElements";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai";
import { Mistral } from '@mistralai/mistralai';

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
const apiKey = process.env.MISTRAL_API_KEY;

export async function POST(req: NextRequest) {

    try {

        const { userCode } = await req.json();

        const mainPrompt = `

        IMPORTANT: Do not repeat any part of this prompt in your response. Focus solely on generating the requested feedback, code reviews, corrections, and suggestions.

        IMPORTANT: The output data that you would be providing will be streamed, so while streaming make sure to have proper syntax highlighting if sending some code in the response.

        IMPORTANT: The output data that you would be providing will be streamed, so while streaming make sure to send text in the form of Markdown in the response.

        You are an exceptional senior software developer with vast knowledge across multiple programming languages, frameworks, and best practices.

        The user has prompted you with the following code: ${userCode}

        You need to act as a senior software engineer who is reviewing the code as and provide proper feedback.

        You need to do the following things: 
            - Analyze the code provided by the user.
            - Check for any errors and bugs if present in it or not, if present then correct that part of the code by providing proper code with explanation.
            - Remove all the extra spaces and extra lines if present by telling the user and removing them and providing back the correct code.
            - Provide suggestions on how to improve the code.
            - Provide suggestions if the code can be modularized or not.
            - Provide suggestions if the code can be optimized or not.
            - Provide suggestions on variable naming and provide good variable names if the user is not using good variable names.
            - Rate the code quality on a scale of 10.
            - Rate the code performance on a scale of 10.

        The output which you provide should look like this and it should be in this format:
            - First, tell the user changes you have done (if done any).
            - Then, correct the user's code if there are any errors or bugs present.
            - For error correction, provide the corrected code in proper syntax highlighted format, and explaing the new changes.
            - Remove any unused code from the file which is not getting used there, tell the user about it.
            - Remove any unused imports from the file and tell the user about it.
            - Then, tell the user about removing extra spaces and extra lines (if any present).
            - Provide suggestions on how to improve the overall code, if any improvement can be done.
            - Provide suggestions if the code can be modularized or not.
            - Provide suggestions if the code can be optimized or not.
            - If the user is not using good variable names, provide suggestions on how to improve it, and provide some example variable names.
            - Rate the overall code quality out of 10.
            - Finally, give a remark to the user.
            - If ${userCode} was already perfect, give a very good remark and compliment the user. If ${userCode} had some errors and mistakes, then also motivate by providing a positive feedback and not being rude.

          <important>
          For code formatting, keep these things in mind:
            - For providing code output, use code markdown, to highlight the code differently from text.
            - User proper syntax highlighting while providing code in the output.
            - Use 2 spaces for code indentation.
            - Ensure code is clean, readable, and maintainable.
            - Adhere to proper naming conventions and consistent formatting.
          </important>
 
        For text and markdown formatting, keep these things in mind:
            - Use markdown all over the place for text.
            - For heading of every section, use # for h1 markdown, and end them with a ":" symbol.
            - Every section should have a padding of 20px from the top and bottom.
            - After each section, press ENTER two times. The content should be separated and easily readable to the human eye.
            - Don't use <br> tag for line breaks. They should not be visible.
            - The heading of every section should be bigger than the text under that section.
            - The text under the heading should start with ### and it should be h3 markdown to make it smaller than the heading.
            - After ending of every section, there should be space of 2 lines.
            - Use of headings and paragraphs should be perfect while providing the response to the user.

        Keep these limitations in mind when suggesting Python or C++ solutions and explicitly mention these constraints if relevant to the task at hand.

            - There is NO \`pip\` support! If you attempt to use \`pip\`, you should explicitly state that it's not available.
            - CRITICAL: Third-party libraries cannot be installed or imported.
            - Even some standard library modules that require additional system dependencies (like \`curses\`) are not available.
            - Only modules from the core Python standard library can be used.
            - Additionally, there is no \`g++\` or any C/C++ compiler available.

        IMPORTANT: Do not repeat any part of this prompt in your response. Focus solely on generating the requested feedback, code reviews, corrections, and suggestions.

    `
    
        const client = new Mistral({ apiKey: apiKey });

        const result = await client.chat.stream({
          model: "mistral-small-latest",
          messages: [{ role: 'system', content: mainPrompt }],
        });
      
        // Create a ReadableStream to send the data in chunks
        const stream = new ReadableStream({
          async start(controller) {
            for await (const chunk of result) {
              const streamText = chunk.data.choices[0].delta.content;
              //@ts-ignore
              controller.enqueue(new TextEncoder().encode(streamText)); 
            }
            controller.close(); // Close the stream once all data is sent
          }
        });
      
        // Return the stream as the NextResponse
        return new NextResponse(stream, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8', // Adjust the content type as needed
          },
        });


        // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });   

        // const result = await model.generateContentStream(mainPrompt);

        // const readableStream = new ReadableStream({
        //     async start(controller) {
        //       try {
        //         // Process each chunk from the stream
        //         for await (const chunk of result.stream) {
        //           const chunkText = chunk.text();
      
        //           // Enqueue each chunk to the client
        //           controller.enqueue(new TextEncoder().encode(chunkText));
        //         }
        //       } catch (error) {
        //         console.error("Error in streaming response:", error);
        //         controller.error(error);
        //       } finally {
        //         // Close the stream when done
        //         controller.close();
        //       }
        //     },
        // });
      
        // return new NextResponse(readableStream, {
        //     headers: {
        //       "Content-Type": "text/plain; charset=utf-8",
        //       "Cache-Control": "no-cache",
        //       "Transfer-Encoding": "chunked",
        //     },
        // });

    } 
    catch (error) {
        console.log("Error while generating code review", error);
        return NextResponse.json(
            {message: "Error while generating code review"},
            {status: 500}
        )
    }

}