/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationTemplateArrayMeta } from "./IncidentNotificationTemplateArrayMeta";
import { IncidentNotificationTemplateIncludedItems } from "./IncidentNotificationTemplateIncludedItems";
import { IncidentNotificationTemplateResponseData } from "./IncidentNotificationTemplateResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with notification templates.
 */
export class IncidentNotificationTemplateArray {
  /**
   * The `NotificationTemplateArray` `data`.
   */
  "data": Array<IncidentNotificationTemplateResponseData>;
  /**
   * Related objects that are included in the response.
   */
  "included"?: Array<IncidentNotificationTemplateIncludedItems>;
  /**
   * Response metadata.
   */
  "meta"?: IncidentNotificationTemplateArrayMeta;

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
    data: {
      baseName: "data",
      type: "Array<IncidentNotificationTemplateResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentNotificationTemplateIncludedItems>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentNotificationTemplateArrayMeta",
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
    return IncidentNotificationTemplateArray.attributeTypeMap;
  }

  public constructor() {}
}
