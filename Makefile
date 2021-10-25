.PHONY: all
all: .generator
	@docker-compose -f docker-compose.generator.yaml up
	@mkdir -p docs/v1 docs/v2
	@mv -f packages/datadog-api-client-v1/*.md docs/v1
	@mv -f packages/datadog-api-client-v2/*.md docs/v2
	@pre-commit run --hook-stage=manual lint