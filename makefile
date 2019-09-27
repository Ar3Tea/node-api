run-api:
	@echo "running node api.."
	cd app
	node Bend.js

run-api-pm:
	@echo "running node api with pm2.."
	cd app
	pm2 start Bend.js --watch

run-tests:
	@echo "running ntesting..."
	npm test

docker-build:
	@echo "building docker container..."
	docker build .

