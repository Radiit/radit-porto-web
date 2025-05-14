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

# Start the application in preview mode on port 4321
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4321"] 