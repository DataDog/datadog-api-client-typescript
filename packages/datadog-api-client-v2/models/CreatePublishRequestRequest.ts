/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreatePublishRequestRequestData } from "./CreatePublishRequestRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A request to ask for approval to publish an app whose protection level is `approval_required`.
 */
export class CreatePublishRequestRequest {
  /**
   * Data for creating a publish request.
   */
  "data"?: CreatePublishRequestRequestData;

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
      type: "CreatePublishRequestRequestData",
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
    return CreatePublishRequestRequest.attributeTypeMap;
  }

  public constructor() {}
}
