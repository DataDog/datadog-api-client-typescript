import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationRequestDataAttributesComponentsAffectedItems";
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";

/**
 * A backfilled degradation update entry.
 */
export class CreateBackfilledDegradationRequestDataAttributesUpdatesItems {
  /**
   * The components affected.
   */
  "componentsAffected"?: Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>;
  /**
   * A description of the update.
   */
  "description"?: string;
  /**
   * Timestamp of when the update occurred.
   */
  "startedAt": Date;
  /**
   * The status of the degradation.
   */
  "status": CreateDegradationRequestDataAttributesStatus;
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
      type: "Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
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
    return CreateBackfilledDegradationRequestDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
