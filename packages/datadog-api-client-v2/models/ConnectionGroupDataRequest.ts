/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConnectionGroupDataAttributesRequest } from "./ConnectionGroupDataAttributesRequest";
import { ConnectionGroupType } from "./ConnectionGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a connection group.
 */
export class ConnectionGroupDataRequest {
  /**
   * Attributes for updating a connection group.
   */
  "attributes"?: ConnectionGroupDataAttributesRequest;
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
      type: "ConnectionGroupDataAttributesRequest",
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
    return ConnectionGroupDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
