# Stage 1: Build with Maven and Java 17
FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code and build jar
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Run the app with Java 17 runtime
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the built jar from build stage
COPY --from=build /app/target/e-commerce-0.0.1-SNAPSHOT.jar app.jar

# Run the app
CMD ["java", "-jar", "app.jar"]
