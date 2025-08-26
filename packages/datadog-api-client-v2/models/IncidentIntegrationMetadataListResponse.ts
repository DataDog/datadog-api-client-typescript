/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataResponseData } from "./IncidentIntegrationMetadataResponseData";
import { IncidentIntegrationMetadataResponseIncludedItem } from "./IncidentIntegrationMetadataResponseIncludedItem";
import { IncidentResponseMeta } from "./IncidentResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of incident integration metadata.
 */
export class IncidentIntegrationMetadataListResponse {
  /**
   * An array of incident integration metadata.
   */
  "data": Array<IncidentIntegrationMetadataResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentIntegrationMetadataResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;

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
      type: "Array<IncidentIntegrationMetadataResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
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
    return IncidentIntegrationMetadataListResponse.attributeTypeMap;
  }

  public constructor() {}
}
