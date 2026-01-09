import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationRequestDataAttributesComponentsAffectedItems";
import { PatchDegradationRequestDataAttributesStatus } from "./PatchDegradationRequestDataAttributesStatus";

export class PatchDegradationRequestDataAttributes {
  "componentsAffected"?: Array<PatchDegradationRequestDataAttributesComponentsAffectedItems>;
  "description"?: string;
  "status"?: PatchDegradationRequestDataAttributesStatus;
  "title"?: string;
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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<PatchDegradationRequestDataAttributesComponentsAffectedItems>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "PatchDegradationRequestDataAttributesStatus",
    },
    title: {
      baseName: "title",
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
    return PatchDegradationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
