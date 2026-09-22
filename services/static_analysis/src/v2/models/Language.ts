import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Programming language
 */
export type Language =
  | typeof PYTHON
  | typeof JAVASCRIPT
  | typeof TYPESCRIPT
  | typeof JAVA
  | typeof GO
  | typeof YAML
  | typeof RUBY
  | typeof CSHARP
  | typeof PHP
  | typeof KOTLIN
  | typeof SWIFT
  | typeof DART
  | typeof DOCKERFILE
  | typeof ELIXIR
  | typeof JSON
  | typeof RUST
  | typeof TERRAFORM
  | typeof STARLARK
  | typeof BASH
  | typeof MARKDOWN
  | typeof APEX
  | typeof R
  | typeof SQL
  | UnparsedObject;
export const PYTHON = "PYTHON";
export const JAVASCRIPT = "JAVASCRIPT";
export const TYPESCRIPT = "TYPESCRIPT";
export const JAVA = "JAVA";
export const GO = "GO";
export const YAML = "YAML";
export const RUBY = "RUBY";
export const CSHARP = "CSHARP";
export const PHP = "PHP";
export const KOTLIN = "KOTLIN";
export const SWIFT = "SWIFT";
export const DART = "DART";
export const DOCKERFILE = "DOCKERFILE";
export const ELIXIR = "ELIXIR";
export const JSON = "JSON";
export const RUST = "RUST";
export const TERRAFORM = "TERRAFORM";
export const STARLARK = "STARLARK";
export const BASH = "BASH";
export const MARKDOWN = "MARKDOWN";
export const APEX = "APEX";
export const R = "R";
export const SQL = "SQL";
