import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentDataAttributesStatus } from "./StatusPagesComponentDataAttributesStatus";

export class CreateDegradationRequestDataAttributesComponentsAffectedItems {
  "id": string;
  "name"?: string;
  "status": StatusPagesComponentDataAttributesStatus;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "StatusPagesComponentDataAttributesStatus",
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
    return CreateDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
  }

  public constructor() {}
}
