import pygame
import random

# Initialize Pygame
pygame.init()

# Set up display
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Arcade Car Game")

# Colors
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)

# Car variables
car_width = 50
car_height = 80
car_speed = 5

# Obstacle variables
obstacle_width = 50
obstacle_height = 80
obstacle_speed = 5

# Define the player car class
class Car:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.width = car_width
        self.height = car_height
        self.speed = car_speed

    def draw(self):
        pygame.draw.rect(screen, white, [self.x, self.y, self.width, self.height])

    def move_left(self):
        self.x -= self.speed
        if self.x < 0:
            self.x = 0

    def move_right(self):
        self.x += self.speed
        if self.x > screen_width - self.width:
            self.x = screen_width - self.width

# Define the obstacle class
class Obstacle:
    def __init__(self):
        self.x = random.randint(0, screen_width - obstacle_width)
        self.y = -obstacle_height
        self.speed = obstacle_speed

    def draw(self):
        pygame.draw.rect(screen, red, [self.x, self.y, obstacle_width, obstacle_height])

    def move(self):
        self.y += self.speed
        if self.y > screen_height:
            self.y = -obstacle_height
            self.x = random.randint(0, screen_width - obstacle_width)

# Check for collision
def is_collision(car, obstacle):
    if (car.y < obstacle.y + obstacle_height and
        car.y + car_height > obstacle.y and
        car.x < obstacle.x + obstacle_width and
        car.x + car_width > obstacle.x):
        return True
    return False

# Main game loop
def game_loop():
    clock = pygame.time.Clock()
    running = True

    car = Car(screen_width // 2 - car_width // 2, screen_height - car_height - 20)
    obstacle = Obstacle()
    score = 0

    while running:
        screen.fill(black)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            car.move_left()
        if keys[pygame.K_RIGHT]:
            car.move_right()

        obstacle.move()

        # Check collision
        if is_collision(car, obstacle):
            running = False

        # Draw objects
        car.draw()
        obstacle.draw()

        # Display score
        font = pygame.font.SysFont(None, 35)
        score_text = font.render(f"Score: {score}", True, white)
        screen.blit(score_text, [10, 10])

        # Increment score
        score += 1

        pygame.display.update()
        clock.tick(60)

    pygame.quit()
    quit()

if __name__ == "__main__":
    game_loop()
