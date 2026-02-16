import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Spec } from "./Spec";

export class WorkflowDescriptionRequest {
  /**
   * The name of the workflow.
   */
  "name": string;
  /**
   * The spec defines what the workflow does.
   */
  "spec": Spec;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "Spec",
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
    return WorkflowDescriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
