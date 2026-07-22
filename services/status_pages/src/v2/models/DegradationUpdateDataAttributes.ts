import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationUpdateDataAttributesComponentsAffectedItems } from "./DegradationUpdateDataAttributesComponentsAffectedItems";

/**
 * Attributes of a degradation update resource.
 */
export class DegradationUpdateDataAttributes {
  /**
   * Components affected by this update.
   */
  "componentsAffected"?: Array<DegradationUpdateDataAttributesComponentsAffectedItems>;
  /**
   * The date and time the update was created.
   */
  "createdAt"?: Date;
  /**
   * The date and time the update was soft-deleted.
   */
  "deletedAt"?: Date;
  /**
   * The message body of the update.
   */
  "description"?: string;
  /**
   * The date and time the update was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The date and time the update started.
   */
  "startedAt"?: Date;
  /**
   * The status of the degradation.
   */
  "status"?: CreateDegradationRequestDataAttributesStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<DegradationUpdateDataAttributesComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    startedAt: {
      baseName: "started_at",
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
    return DegradationUpdateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
