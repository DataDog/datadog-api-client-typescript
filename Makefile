.PHONY: all
all: .generator
	@rm -rf packages/datadog-api-client-v*/ examples/v*
	@pre-commit run --all-files --hook-stage=manual generator-v1 || true
	@pre-commit run --all-files --hook-stage=manual generator-v2 || true
	@pre-commit run --all-files --hook-stage=manual lint || echo "modified files"
	@pre-commit run --all-files --hook-stage=manual examples || true
	@pre-commit run --all-files --hook-stage=manual lint-examples || echo "modified files"
