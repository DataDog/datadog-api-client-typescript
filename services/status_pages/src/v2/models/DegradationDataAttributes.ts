import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationDataAttributesComponentsAffectedItems } from "./DegradationDataAttributesComponentsAffectedItems";
import { DegradationDataAttributesSource } from "./DegradationDataAttributesSource";
import { DegradationDataAttributesUpdatesItems } from "./DegradationDataAttributesUpdatesItems";

/**
 * The attributes of a degradation.
 */
export class DegradationDataAttributes {
  /**
   * Components affected by the degradation.
   */
  "componentsAffected"?: Array<DegradationDataAttributesComponentsAffectedItems>;
  /**
   * Timestamp of when the degradation was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the degradation.
   */
  "description"?: string;
  /**
   * Timestamp of when the degradation was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The source of the degradation.
   */
  "source"?: DegradationDataAttributesSource;
  /**
   * The status of the degradation.
   */
  "status"?: CreateDegradationRequestDataAttributesStatus;
  /**
   * Title of the degradation.
   */
  "title"?: string;
  /**
   * Past updates made to the degradation.
   */
  "updates"?: Array<DegradationDataAttributesUpdatesItems>;
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
      type: "Array<DegradationDataAttributesComponentsAffectedItems>",
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
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    source: {
      baseName: "source",
      type: "DegradationDataAttributesSource",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    updates: {
      baseName: "updates",
      type: "Array<DegradationDataAttributesUpdatesItems>",
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
    return DegradationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
