/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a PagerDuty service.
 */
export class IncidentPagerdutyServiceDataAttributes {
  /**
   * The handle for the PagerDuty service.
   */
  "handle": string;
  /**
   * The name of the PagerDuty service.
   */
  "name": string;
  /**
   * The PagerDuty service identifier.
   */
  "serviceId": string;
  /**
   * Whether webhooks are enabled for this service.
   */
  "webhooksEnabled": boolean;

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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    serviceId: {
      baseName: "service_id",
      type: "string",
      required: true,
    },
    webhooksEnabled: {
      baseName: "webhooks_enabled",
      type: "boolean",
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
    return IncidentPagerdutyServiceDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
