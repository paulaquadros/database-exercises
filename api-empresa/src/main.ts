import { Api } from "./server";
import connection from "./db/config";
const start = async (): Promise<void> => {
  try {
    await connection.sync();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  try {
    new Api().server.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
void start();
