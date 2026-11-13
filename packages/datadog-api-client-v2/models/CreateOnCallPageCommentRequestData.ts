/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateOnCallPageCommentRequestAttributes } from "./CreateOnCallPageCommentRequestAttributes";
import { OnCallPageCommentType } from "./OnCallPageCommentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a comment on an On-Call Page.
 */
export class CreateOnCallPageCommentRequestData {
  /**
   * Attributes for creating a comment on an On-Call Page.
   */
  "attributes": CreateOnCallPageCommentRequestAttributes;
  /**
   * A client-generated UUID that makes the request idempotent: retrying with the same ID
   * does not create a duplicate comment. If omitted or not a valid UUID, a random one is generated.
   */
  "id"?: string;
  /**
   * Indicates that the resource is of type `comments`.
   */
  "type": OnCallPageCommentType;

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
      type: "CreateOnCallPageCommentRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OnCallPageCommentType",
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
    return CreateOnCallPageCommentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
