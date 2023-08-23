/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentType } from "./IncidentAttachmentType";
import { IncidentAttachmentUpdateAttributes } from "./IncidentAttachmentUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single incident attachment.
 */
export class IncidentAttachmentUpdateData {
  /**
   * Incident attachment attributes.
   */
  "attributes"?: IncidentAttachmentUpdateAttributes;
  /**
   * A unique identifier that represents the incident attachment.
   */
  "id"?: string;
  /**
   * The incident attachment resource type.
   */
  "type": IncidentAttachmentType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "IncidentAttachmentUpdateAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "IncidentAttachmentType",
      required: true,
    },
  };
}
