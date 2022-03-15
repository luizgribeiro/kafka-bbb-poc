import "dotenv/config";
import sanitizedConfig from "./config/config";
import { KafkaClient } from "./kafka";

(async () => {
  const kafka = new KafkaClient(sanitizedConfig);
  await kafka.connect();
  await kafka.publishMessage(
    sanitizedConfig.TOPIC,
    JSON.stringify({ idParticipante: 12 }),
    "votos_paredao_01"
  );
})();
