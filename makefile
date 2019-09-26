run-api:
	@echo "running node api.."
	node Bend.js

run-mock-test:
	@echo "running mock testing..."
	mocha Bend.MockTest.js

run-test:
	@echo "running non-mock testing..."
	mocha Bend.Test.js

docker-build:
	@echo "building docker container..."
	docker build .

docker-run:
	@echo "running container..."
	docker run node