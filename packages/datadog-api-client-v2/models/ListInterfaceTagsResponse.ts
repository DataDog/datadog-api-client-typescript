/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListInterfaceTagsResponseData } from "./ListInterfaceTagsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for listing interface tags.
 */
export class ListInterfaceTagsResponse {
  /**
   * Response data for listing interface tags.
   */
  "data"?: ListInterfaceTagsResponseData;

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
      type: "ListInterfaceTagsResponseData",
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
    return ListInterfaceTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
