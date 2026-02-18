/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConnectionGroupDataResponse } from "./ConnectionGroupDataResponse";
import { ListConnectionGroupsResponseMeta } from "./ListConnectionGroupsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for listing connection groups.
 */
export class ListConnectionGroupsResponse {
  /**
   * An array of connection groups.
   */
  "data": Array<ConnectionGroupDataResponse>;
  /**
   * Metadata for the list connection groups response.
   */
  "meta"?: ListConnectionGroupsResponseMeta;

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
      type: "Array<ConnectionGroupDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListConnectionGroupsResponseMeta",
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
    return ListConnectionGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
