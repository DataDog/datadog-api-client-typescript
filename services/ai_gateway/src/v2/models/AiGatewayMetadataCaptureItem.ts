import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * An item Metadata-only capture can add to LLM Observability spans. Each is structure or a number, never conversation text. `tool_usage` adds tool call and result counts; `tool_output_size` adds estimated tool output tokens, total and average; `tool_names` adds each tool call and result with its name, ID and type; `conversation_shape` adds every message with its role and no text; `input_size_by_role` adds estimated input tokens per role; `available_tools` adds the names of the tools the request offered; `generation_settings` adds numeric and enumerated settings such as temperature and the finish reason.
 */
export type AiGatewayMetadataCaptureItem =
  | typeof TOOL_USAGE
  | typeof TOOL_OUTPUT_SIZE
  | typeof TOOL_NAMES
  | typeof CONVERSATION_SHAPE
  | typeof INPUT_SIZE_BY_ROLE
  | typeof AVAILABLE_TOOLS
  | typeof GENERATION_SETTINGS
  | UnparsedObject;
export const TOOL_USAGE = "tool_usage";
export const TOOL_OUTPUT_SIZE = "tool_output_size";
export const TOOL_NAMES = "tool_names";
export const CONVERSATION_SHAPE = "conversation_shape";
export const INPUT_SIZE_BY_ROLE = "input_size_by_role";
export const AVAILABLE_TOOLS = "available_tools";
export const GENERATION_SETTINGS = "generation_settings";
