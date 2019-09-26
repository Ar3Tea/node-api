run-api:
	@echo "running node api.."
	node Bend.js

run-tests:
	@echo "running ntesting..."
	npm test

docker-build:
	@echo "building docker container..."
	docker build .

