/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Uses a GeoIP database to enrich logs based on an IP field.
 */
export class ObservabilityPipelineEnrichmentTableGeoIp {
  /**
   * Path to the IP field in the log.
   */
  "keyField": string;
  /**
   * Locale used to resolve geographical names.
   */
  "locale": string;
  /**
   * Path to the GeoIP database file.
   */
  "path": string;

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
    keyField: {
      baseName: "key_field",
      type: "string",
      required: true,
    },
    locale: {
      baseName: "locale",
      type: "string",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
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
    return ObservabilityPipelineEnrichmentTableGeoIp.attributeTypeMap;
  }

  public constructor() {}
}
