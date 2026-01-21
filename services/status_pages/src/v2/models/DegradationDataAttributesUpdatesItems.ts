import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationDataAttributesUpdatesItemsComponentsAffectedItems } from "./DegradationDataAttributesUpdatesItemsComponentsAffectedItems";

export class DegradationDataAttributesUpdatesItems {
  /**
   * The components affected at the time of the update.
   */
  "componentsAffected"?: Array<DegradationDataAttributesUpdatesItemsComponentsAffectedItems>;
  /**
   * Timestamp of when the update was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the update.
   */
  "description"?: string;
  /**
   * Identifier of the update.
   */
  "id"?: string;
  /**
   * Timestamp of when the update was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The status of the degradation.
   */
  "status"?: CreateDegradationRequestDataAttributesStatus;
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
      type: "Array<DegradationDataAttributesUpdatesItemsComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
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
    return DegradationDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
