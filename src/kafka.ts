import { Kafka, SASLOptions } from "kafkajs";
import { Config } from "./config/config";

class KafkaClient {
  constructor(env: Config) {
    //const mechanism: 'plain' = 'plain';
    const sasl = {
      username: env.KAFKA_KEY,
      password: env.KAFKA_SECRET,
      mechanism: "plain",
    };

    if (sasl === null) {
      throw new Error("Config error: sasl");
    }
    const kafka = new Kafka({
      clientId: "Node Kafka -- BBB API",
      brokers: [env.KAFKA_BOOTSTRAP_SERVER],
      sasl,
      ssl: !!sasl,
    });
  }

  kafka = new Kafka({
    clientId: "Node Kafka",
    brokers: [this.parseEnvVariable(process.env.KAFKA_BOOTSTRAP_SERVER)],
    ssl,
    sasl,
  });
}

/*
(async () => {
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
  }
})();
*/
