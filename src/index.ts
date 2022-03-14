import "dotenv/config";
import sanitizedConfig from "./config/config";
import { kafka } from "./kafka";

( async() => {
  const kafka = new 
/*
  const producer = kafka.producer();
  await producer.connect();
  try {
    const responses = await producer.send({
      topic: process.env?.TOPIC || "error",
      messages: [
        {
          // Name of the published package as key, to make sure that we process events in order
          key: "nome teste", //event.name,

          value: JSON.stringify({
            package: "nome teste", //event.name,
            version: "versao teste", //event.version,
          }),
        },
      ],
    });

    console.log("Published message", { responses });
  } catch (error) {
    console.error("Error publishing message", error);
    */
  }
})();
