/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";
import { IncidentServicesResponseMeta } from "./IncidentServicesResponseMeta";

export class IncidentServicesResponse {
  /**
   * An array of incident services.
   */
  "data": Array<IncidentServiceResponseData>;
  /**
   * Included related resources which the user requested.
   */
  "included"?: Array<IncidentServiceIncludedItems>;
  "meta"?: IncidentServicesResponseMeta;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    data: {
      baseName: "data",
      type: "Array<IncidentServiceResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentServiceIncludedItems>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentServicesResponseMeta",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
