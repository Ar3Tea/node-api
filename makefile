run-api:
	@echo "running node api.."
	pm2 start Bend.js --watch

run-tests:
	@echo "running ntesting..."
	npm test

docker-build:
	@echo "building docker container..."
	docker build .

