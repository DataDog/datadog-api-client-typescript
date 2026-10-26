import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Analyzer options sent by browser-based clients. Accepted but ignored: the API always runs
 * the analysis with tree-sitter enabled and rule output logged.
 */
export class AnalysisRequestOptions {
  /**
   * Whether to capture the output logged by rules during execution. Ignored by this operation.
   */
  "logOutput"?: boolean;
  /**
   * Whether to use tree-sitter to parse the source code. Ignored by this operation.
   */
  "useTreeSitter"?: boolean;
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
    logOutput: {
      baseName: "log_output",
      type: "boolean",
    },
    useTreeSitter: {
      baseName: "use_tree_sitter",
      type: "boolean",
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
    return AnalysisRequestOptions.attributeTypeMap;
  }

  public constructor() {}
}
