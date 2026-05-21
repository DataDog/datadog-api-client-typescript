import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPagerdutyServiceDataAttributes } from "./IncidentPagerdutyServiceDataAttributes";
import { IncidentPagerdutyServiceType } from "./IncidentPagerdutyServiceType";

/**
 * PagerDuty service data.
 */
export class IncidentPagerdutyServiceData {
  /**
   * Attributes of a PagerDuty service.
   */
  "attributes": IncidentPagerdutyServiceDataAttributes;
  /**
   * The PagerDuty service identifier.
   */
  "id": string;
  /**
   * PagerDuty service resource type.
   */
  "type": IncidentPagerdutyServiceType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentPagerdutyServiceDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPagerdutyServiceType",
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
    return IncidentPagerdutyServiceData.attributeTypeMap;
  }

  public constructor() {}
}
