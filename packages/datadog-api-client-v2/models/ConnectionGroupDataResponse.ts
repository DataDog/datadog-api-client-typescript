/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConnectionGroupDataAttributesResponse } from "./ConnectionGroupDataAttributesResponse";
import { ConnectionGroupRelationships } from "./ConnectionGroupRelationships";
import { ConnectionGroupType } from "./ConnectionGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a connection group.
 */
export class ConnectionGroupDataResponse {
  /**
   * Attributes of a connection group.
   */
  "attributes": ConnectionGroupDataAttributesResponse;
  /**
   * The unique identifier of the connection group.
   */
  "id": string;
  /**
   * Relationships for a connection group.
   */
  "relationships"?: ConnectionGroupRelationships;
  /**
   * The definition of `ConnectionGroupType` object.
   */
  "type": ConnectionGroupType;

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
      type: "ConnectionGroupDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ConnectionGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "ConnectionGroupType",
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
    return ConnectionGroupDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
