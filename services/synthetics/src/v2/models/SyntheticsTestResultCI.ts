import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultCIPipeline } from "./SyntheticsTestResultCIPipeline";
import { SyntheticsTestResultCIProvider } from "./SyntheticsTestResultCIProvider";
import { SyntheticsTestResultCIStage } from "./SyntheticsTestResultCIStage";

/**
 * CI information associated with the test result.
 */
export class SyntheticsTestResultCI {
  /**
   * Details of the CI pipeline.
   */
  "pipeline"?: SyntheticsTestResultCIPipeline;
  /**
   * Details of the CI provider.
   */
  "provider"?: SyntheticsTestResultCIProvider;
  /**
   * Details of the CI stage.
   */
  "stage"?: SyntheticsTestResultCIStage;
  /**
   * Path of the workspace that ran the CI job.
   */
  "workspacePath"?: string;
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
    pipeline: {
      baseName: "pipeline",
      type: "SyntheticsTestResultCIPipeline",
    },
    provider: {
      baseName: "provider",
      type: "SyntheticsTestResultCIProvider",
    },
    stage: {
      baseName: "stage",
      type: "SyntheticsTestResultCIStage",
    },
    workspacePath: {
      baseName: "workspace_path",
      type: "string",
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
    return SyntheticsTestResultCI.attributeTypeMap;
  }

  public constructor() {}
}
