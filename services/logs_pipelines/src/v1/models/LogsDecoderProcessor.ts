import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsDecoderProcessorBinaryToTextEncoding } from "./LogsDecoderProcessorBinaryToTextEncoding";
import { LogsDecoderProcessorInputRepresentation } from "./LogsDecoderProcessorInputRepresentation";
import { LogsDecoderProcessorType } from "./LogsDecoderProcessorType";

/**
 * The decoder processor decodes any source attribute containing a
 * base64/base16-encoded UTF-8/ASCII string back to its original value, storing the
 * result in a target attribute.
 */
export class LogsDecoderProcessor {
  /**
   * The encoding used to represent the binary data.
   */
  "binaryToTextEncoding": LogsDecoderProcessorBinaryToTextEncoding;
  /**
   * The original representation of input string.
   */
  "inputRepresentation": LogsDecoderProcessorInputRepresentation;
  /**
   * Whether the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Name of the log attribute with the encoded data.
   */
  "source": string;
  /**
   * Name of the log attribute that contains the decoded data.
   */
  "target": string;
  /**
   * Type of logs decoder processor.
   */
  "type": LogsDecoderProcessorType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    binaryToTextEncoding: {
      baseName: "binary_to_text_encoding",
      type: "LogsDecoderProcessorBinaryToTextEncoding",
      required: true,
    },
    inputRepresentation: {
      baseName: "input_representation",
      type: "LogsDecoderProcessorInputRepresentation",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsDecoderProcessorType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsDecoderProcessor.attributeTypeMap;
  }

  public constructor() {}
}
