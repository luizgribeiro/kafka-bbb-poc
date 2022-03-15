import { Kafka, SASLOptions, Producer } from "kafkajs";
import { Config } from "./config/config";

export class KafkaClient {
  private producer: Producer;

  constructor(env: Config) {
    const sasl = this.saslFactory(env.KAFKA_KEY, env.KAFKA_SECRET);

    const kafka = new Kafka({
      clientId: "Node Kafka -- BBB API",
      brokers: [env.KAFKA_BOOTSTRAP_SERVER],
      sasl,
      ssl: !!sasl,
    });
    this.producer = kafka.producer();
  }

  async connect() {
    await this.producer.connect();
  }

  async publishMessage(topic: string, message: string, key: string) {
    try {
      const responses = await this.producer.send({
        topic,
        messages: [
          {
            key,
            value: message,
          },
        ],
      });
      console.log("Message published successfully", responses);
    } catch (error) {
      console.error("Could not publish message", error);
    }
  }

  private saslFactory(kafkaKey: string, kafkaSecret: string): SASLOptions {
    return {
      username: kafkaKey,
      password: kafkaSecret,
      mechanism: "plain",
    };
  }
}
