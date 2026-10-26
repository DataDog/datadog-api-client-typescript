/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";
import { ExperimentsReplaceExperimentProtocolRequestDataAttributes } from "./ExperimentsReplaceExperimentProtocolRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API protocol request resource.
 */
export class ExperimentsReplaceExperimentProtocolRequestData {
  /**
   * Replace a published protocol template. Omitted optional template fields are cleared. Omitted enforcement and migration_metadata are preserved. Enabled limits require their values; allocation settings require environment_id.
   */
  "attributes": ExperimentsReplaceExperimentProtocolRequestDataAttributes;
  /**
   * Protocol ID. If supplied, must match the path protocol_id.
   */
  "id"?: string;
  /**
   * Protocols resource type.
   */
  "type": ExperimentsPublicProtocolResponseDataType;

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
      type: "ExperimentsReplaceExperimentProtocolRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPublicProtocolResponseDataType",
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
    return ExperimentsReplaceExperimentProtocolRequestData.attributeTypeMap;
  }

  public constructor() {}
}
