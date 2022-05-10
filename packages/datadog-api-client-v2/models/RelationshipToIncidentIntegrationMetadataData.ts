/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";

import { AttributeTypeMap } from "../util";

/**
 * A relationship reference for an integration metadata object.
 */
export class RelationshipToIncidentIntegrationMetadataData {
  /**
   * A unique identifier that represents the integration metadata.
   */
  "id": string;
  /**
   * Integration metadata resource type.
   */
  "type": IncidentIntegrationMetadataType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentIntegrationMetadataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentIntegrationMetadataData.attributeTypeMap;
  }

  public constructor() {}
}
