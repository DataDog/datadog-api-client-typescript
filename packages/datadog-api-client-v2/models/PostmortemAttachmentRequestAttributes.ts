/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PostmortemCell } from "./PostmortemCell";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Postmortem attachment attributes
 */
export class PostmortemAttachmentRequestAttributes {
  /**
   * The cells of the postmortem
   */
  "cells"?: Array<PostmortemCell>;
  /**
   * The content of the postmortem
   */
  "content"?: string;
  /**
   * The ID of the postmortem template
   */
  "postmortemTemplateId"?: string;
  /**
   * The title of the postmortem
   */
  "title"?: string;

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
    cells: {
      baseName: "cells",
      type: "Array<PostmortemCell>",
    },
    content: {
      baseName: "content",
      type: "string",
    },
    postmortemTemplateId: {
      baseName: "postmortem_template_id",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return PostmortemAttachmentRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
