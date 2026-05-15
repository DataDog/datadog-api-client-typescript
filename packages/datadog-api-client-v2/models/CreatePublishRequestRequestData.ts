/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreatePublishRequestRequestDataAttributes } from "./CreatePublishRequestRequestDataAttributes";
import { PublishRequestType } from "./PublishRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a publish request.
 */
export class CreatePublishRequestRequestData {
  /**
   * Attributes for creating a publish request.
   */
  "attributes"?: CreatePublishRequestRequestDataAttributes;
  /**
   * The publish-request resource type.
   */
  "type"?: PublishRequestType;

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
      type: "CreatePublishRequestRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "PublishRequestType",
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
    return CreatePublishRequestRequestData.attributeTypeMap;
  }

  public constructor() {}
}
