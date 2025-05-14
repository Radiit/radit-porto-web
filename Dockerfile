FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Modify Astro config to remove base path when running in container
RUN sed -i 's/base: "\/porto-radit\/",/base: "\/",/' astro.config.mjs

# Build the Astro site
RUN pnpm build

# Expose port 4321
EXPOSE 4321

# Set environment variables for preview mode
ENV HOST=0.0.0.0
ENV PORT=4321
ENV BASE_URL=/

# Start the application in preview mode
CMD ["pnpm", "preview", "--host"] 