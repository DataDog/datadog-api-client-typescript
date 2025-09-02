import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Programming language associated with the issue.
 */
export type IssueLanguage =
  | typeof BRIGHTSCRIPT
  | typeof C
  | typeof C_PLUS_PLUS
  | typeof C_SHARP
  | typeof CLOJURE
  | typeof DOT_NET
  | typeof ELIXIR
  | typeof ERLANG
  | typeof GO
  | typeof GROOVY
  | typeof HASKELL
  | typeof HCL
  | typeof JAVA
  | typeof JAVASCRIPT
  | typeof JVM
  | typeof KOTLIN
  | typeof OBJECTIVE_C
  | typeof PERL
  | typeof PHP
  | typeof PYTHON
  | typeof RUBY
  | typeof RUST
  | typeof SCALA
  | typeof SWIFT
  | typeof TERRAFORM
  | typeof TYPESCRIPT
  | typeof UNKNOWN
  | UnparsedObject;
export const BRIGHTSCRIPT = "BRIGHTSCRIPT";
export const C = "C";
export const C_PLUS_PLUS = "C_PLUS_PLUS";
export const C_SHARP = "C_SHARP";
export const CLOJURE = "CLOJURE";
export const DOT_NET = "DOT_NET";
export const ELIXIR = "ELIXIR";
export const ERLANG = "ERLANG";
export const GO = "GO";
export const GROOVY = "GROOVY";
export const HASKELL = "HASKELL";
export const HCL = "HCL";
export const JAVA = "JAVA";
export const JAVASCRIPT = "JAVASCRIPT";
export const JVM = "JVM";
export const KOTLIN = "KOTLIN";
export const OBJECTIVE_C = "OBJECTIVE_C";
export const PERL = "PERL";
export const PHP = "PHP";
export const PYTHON = "PYTHON";
export const RUBY = "RUBY";
export const RUST = "RUST";
export const SCALA = "SCALA";
export const SWIFT = "SWIFT";
export const TERRAFORM = "TERRAFORM";
export const TYPESCRIPT = "TYPESCRIPT";
export const UNKNOWN = "UNKNOWN";
