/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OIDCCloudAuthPersonaMappingAttributesResponse } from "./OIDCCloudAuthPersonaMappingAttributesResponse";
import { OIDCCloudAuthPersonaMappingType } from "./OIDCCloudAuthPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom OIDC persona mapping resource.
 */
export class OIDCCloudAuthPersonaMappingDataResponse {
  /**
   * Stored Custom OIDC persona mapping attributes.
   */
  "attributes": OIDCCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique resource identifier.
   */
  "id": string;
  /**
   * Resource type returned by the existing Custom OIDC persona mapping API.
   */
  "type": OIDCCloudAuthPersonaMappingType;

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
      type: "OIDCCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OIDCCloudAuthPersonaMappingType",
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
    return OIDCCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
