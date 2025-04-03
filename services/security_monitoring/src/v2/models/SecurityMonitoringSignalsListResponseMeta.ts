import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalsListResponseMetaPage } from "./SecurityMonitoringSignalsListResponseMetaPage";

/**
 * Meta attributes.
 */
export class SecurityMonitoringSignalsListResponseMeta {
  /**
   * Paging attributes.
   */
  "page"?: SecurityMonitoringSignalsListResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "SecurityMonitoringSignalsListResponseMetaPage",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalsListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
