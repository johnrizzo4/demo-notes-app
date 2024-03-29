import handler from "./util/handler"
import dynamodb from "./util/dynamodb"

export const main = handler( async (event) =>{
    const params = {
        TableName : process.env.TABLE_NAME,
        Key : {
            userId : "123",
            noteId : event.pathParameters.id,
        }
    }
    console.log(params);

    const result = await dynamodb.get(params);
    if (!result.Item) {
        throw new Error("Item not found");
    }
    return result.Item;
} );