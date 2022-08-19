package main

import (
	"github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/gofiber/fiber/v2"
	"log"
	"luizgribeiro/bbb/src/controllers"
	"os"
	"os/signal"
)

func main() {
	app := fiber.New()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		_ = <-c
		log.Println("Gracefully shutting down...")
		_ = app.Shutdown()
	}()

	// Routes
	app.Post("/", hello)

	vote.VoteController(app)

	log.Fatal(app.Listen(":8000"))
}

// Handler
func hello(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}
