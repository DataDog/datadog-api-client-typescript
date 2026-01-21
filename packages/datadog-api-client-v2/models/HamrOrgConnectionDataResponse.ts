/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HamrOrgConnectionAttributesResponse } from "./HamrOrgConnectionAttributesResponse";
import { HamrOrgConnectionType } from "./HamrOrgConnectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class HamrOrgConnectionDataResponse {
  "attributes": HamrOrgConnectionAttributesResponse;
  /**
   * The organization UUID for this HAMR connection.
   */
  "id": string;
  /**
   * Type of the HAMR organization connection resource.
   */
  "type": HamrOrgConnectionType;

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
      type: "HamrOrgConnectionAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HamrOrgConnectionType",
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
    return HamrOrgConnectionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
