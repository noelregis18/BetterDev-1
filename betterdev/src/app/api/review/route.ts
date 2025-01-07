import { allowedHTMLElements } from "@/constants/htmlElements";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

export async function POST(req: NextRequest) {

    try {

        const { userCode } = await req.json();

        const mainPrompt = `

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
            - Rate the overall code quality out of 10. This rating should be shown like 10 circles, out of which only those are filled which are equal to the rating.
            - Finally, give a positive remark to the user.
            - If ${userCode} was already perfect, give a very good remark and compliment the user. If ${userCode} had some errors and mistakes, then also motivate by providing a positive feedback and not being rude.

        For formatting, keep these things in mind:
            - Use markdown all over the place.
            - Use of headings and paragraphs should be perfect while providing the response to the user.
            - User proper syntax highlighting while providing code in the output.
            - Use the following HTML elements: ${allowedHTMLElements.map((tagName) => `<${tagName}>`).join(', ')} 
            - Use 2 spaces for code indentation.
            - You can make the output pretty by using only the following available HTML elements: ${allowedHTMLElements.map((tagName) => `<${tagName}>`).join(', ')}
            - Ensure code is clean, readable, and maintainable.
            - Adhere to proper naming conventions and consistent formatting.

        Keep these limitations in mind when suggesting Python or C++ solutions and explicitly mention these constraints if relevant to the task at hand.

            - There is NO \`pip\` support! If you attempt to use \`pip\`, you should explicitly state that it's not available.
            - CRITICAL: Third-party libraries cannot be installed or imported.
            - Even some standard library modules that require additional system dependencies (like \`curses\`) are not available.
            - Only modules from the core Python standard library can be used.
            - Additionally, there is no \`g++\` or any C/C++ compiler available.

    `

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });   

        const result = await model.generateContentStream(mainPrompt);

        const readableStream = new ReadableStream({
            async pull(controller) {
              // For each chunk in the stream from Gemini API, push it to the frontend
              for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                controller.enqueue(chunkText);
              }
              controller.close();
            },
        });

        return new NextResponse(readableStream, {
            headers: { "Content-Type": "text/plain" },
        });
    } 
    catch (error) {
        return NextResponse.json(
            {message: "Error while generating code review"},
            {status: 500}
        )
    }

}