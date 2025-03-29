/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { KafkaSourceLibrdkafkaOptionsItems } from "./KafkaSourceLibrdkafkaOptionsItems";
import { KafkaSourceSasl } from "./KafkaSourceSasl";
import { KafkaSourceType } from "./KafkaSourceType";
import { Tls } from "./Tls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `kafka` source ingests data from Apache Kafka topics.
 */
export class KafkaSource {
  /**
   * The `KafkaSource` `group_id`.
   */
  "groupId": string;
  /**
   * The `KafkaSource` `id`.
   */
  "id": string;
  /**
   * The `KafkaSource` `librdkafka_options`.
   */
  "librdkafkaOptions"?: Array<KafkaSourceLibrdkafkaOptionsItems>;
  /**
   * The definition of `KafkaSourceSasl` object.
   */
  "sasl"?: KafkaSourceSasl;
  /**
   * The definition of `Tls` object.
   */
  "tls"?: Tls;
  /**
   * The `KafkaSource` `topics`.
   */
  "topics": Array<string>;
  /**
   * The definition of `KafkaSourceType` object.
   */
  "type": KafkaSourceType;

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
    groupId: {
      baseName: "group_id",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    librdkafkaOptions: {
      baseName: "librdkafka_options",
      type: "Array<KafkaSourceLibrdkafkaOptionsItems>",
    },
    sasl: {
      baseName: "sasl",
      type: "KafkaSourceSasl",
    },
    tls: {
      baseName: "tls",
      type: "Tls",
    },
    topics: {
      baseName: "topics",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "KafkaSourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return KafkaSource.attributeTypeMap;
  }

  public constructor() {}
}
