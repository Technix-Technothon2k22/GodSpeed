import {
  Input,
  Text,
  VStack,
  Stack,
  Heading,
  Textarea,
  HStack,
  Button,
  InputGroup,
  InputLeftAddon,
  FormLabel,
  IconButton,
  InputLeftElement,
} from '@chakra-ui/react';

import { useState } from 'react';
import AlertInput from '../../ui/AlertInput';

import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  BsTwitter,
  BsInstagram,
  BsWhatsapp,
  BsBackspace,
} from 'react-icons/bs';

import { useEffect } from 'react';

import { useSession } from 'next-auth/react';

import Link from 'next/link';
import { useRouter } from 'next/router';

function NewEventForm() {
  const { data: session } = useSession();

  // console.log(session);

  // useEffect(() => {
  //   if (session)
  //     setUser({
  //       name: session.user.name,
  //       image: session.user.image,
  //     });
  // }, [session]);

  // console.log(user);

  const [data, setData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    twitter: '',
    instagram: '',
    whatsapp: '',
    city: '',
    state: '',
    fee: '',
    organiserPage: '',
    faqs: [
      {
        question: '',
        answer: '',
      },
    ],
  });

  const router = useRouter();

  const [error, setError] = useState('');

  function addMoreForm() {
    setData({
      ...data,
      faqs: [
        ...data.faqs,
        {
          question: '',
          answer: '',
        },
      ],
    });
  }

  function renderFormAfterFirstQuestion() {
    return data.faqs.map((faq, index) => {
      if (index < 1) {
        return true;
      } else {
        return (
          <div key={index}>
            <FormLabel>Question {index + 1}</FormLabel>
            {error === index && <AlertInput title="Please complete the FaQ" />}
            <Input
              value={data.faqs[index].question}
              onChange={(e) =>
                setData({
                  ...data,
                  faqs: [
                    ...data.faqs.slice(0, index),
                    {
                      question: e.target.value,
                      answer: data.faqs[index].answer,
                    },
                    ...data.faqs.slice(index + 1),
                  ],
                })
              }
            />

            <FormLabel>Answer {index + 1}</FormLabel>
            <Input
              value={data.faqs[index].answer}
              onChange={(e) =>
                setData({
                  ...data,
                  faqs: [
                    ...data.faqs.slice(0, index),
                    {
                      question: data.faqs[index].question,
                      answer: e.target.value,
                    },
                    ...data.faqs.slice(index + 1),
                  ],
                })
              }
            />
          </div>
        );
      }
    });
  }

  function AddOrDelete(index) {
    return (
      <HStack width="100%" alignItems="center" justify="center">
        {data.faqs.length < 4 && (
          <Button
            isDisabled={
              data.faqs[index].question === '' || data.faqs[index].answer === ''
            }
            leftIcon={<AiOutlinePlus />}
            onClick={addMoreForm}
          >
            Add more questions
          </Button>
        )}
        <Button
          leftIcon={<MdDeleteOutline />}
          onClick={deleteQuestion}
          _hover={{
            bg: 'red.100',
          }}
        >
          Remove last question
        </Button>
      </HStack>
    );
  }

  function deleteQuestion() {
    setData({
      ...data,
      faqs: [...data.faqs.slice(0, data.faqs.length - 1)],
    });
  }

  function dynamicForm() {
    if (data.faqs.length === 1) {
      return (
        <Button
          isDisabled={
            data.faqs[0].question === '' || data.faqs[0].answer === ''
          }
          onClick={addMoreForm}
        >
          Add more questions
        </Button>
      );
    } else if (data.faqs.length === 2) {
      return (
        <>
          {renderFormAfterFirstQuestion()}
          {AddOrDelete(data.faqs.length - 1)}
        </>
      );
    } else if (data.faqs.length === 3) {
      return (
        <>
          {renderFormAfterFirstQuestion()}
          {AddOrDelete(data.faqs.length - 1)}
        </>
      );
    } else if (data.faqs.length === 4) {
      return (
        <>
          {renderFormAfterFirstQuestion()}
          {AddOrDelete(data.faqs.length - 1)}
        </>
      );
    }
  }

  const [loading, setLoading] = useState(false);

  async function sendData() {
    // form validation
    if (data.title === '') {
      setError('title');
      return;
    }

    if (data.description === '' || data.description.length > 500) {
      setError('description');
      return;
    }

    if (data.whatsapp === '') {
      console.log('Whatsapp not');
      setError('whatsapp');
      return;
    }

    if (data.city === '') {
      setError('details');
      return;
    }

    if (data.state === '') {
      setError('details');
      return;
    }

    if (data.startDate === '') {
      setError('details');
      return;
    }

    if (data.endDate === '') {
      setError('details');
      return;
    }

    // return error if startDate > endDate
    if (data.startDate > data.endDate) {
      setError('details-error');
      return;
    }

    if (data.fee === '') {
      setError('details');
      return;
    }

    if (data.organiserPage === '') {
      setError('details');
      return;
    }

    if (data.faqs[0].question === '' || data.faqs[0].answer === '') {
      setError('faq');
      return;
    }

    if (data.faqs.length >= 0) {
      let error;
      data.faqs.map(async (faqs, index) => {
        if (faqs.question === '' || faqs.answer === '') {
          alert('One of the questions are unanswered!');
          error = 1;
          return;
        }
      });

      if (error === 1) {
        return;
      }
    }

    // console.log(data);

    setLoading(true);
    try {
      console.log(data);
      await fetch('/api/send-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          author: session.user.name,
          authorImage: session.user.image,
          authorEmail: session.user.email,
        }),
      });

      setLoading(false);
      router.push('/dashboard');
    } catch (error) {
      setLoading(false);
      console.log('Error!', error);
      return;
    }
  }

  return (
    <VStack>
      <Stack
        width="57%"
        style={{
          margin: '70px auto',
        }}
      >
        <Link href="/dashboard">
          <Button
            leftIcon={<BsBackspace />}
            _hover={{
              bg: 'red.100',
            }}
          >
            Go back
          </Button>
        </Link>

        <Heading fontSize="2xl" marginY={'40px'} fontWeight={'bold'}>
          Someones going to be busy?
        </Heading>

        {/* eslint-disable-next-line react/no-unescaped-entities */}

        {/* Title of the event */}
        <Text fontWeight="semibold">Lets start with the name, shall we?</Text>
        {error === 'title' && data.title.length === 0 && (
          <AlertInput title="You missed the most important part!" />
        )}
        <Input
          placeholder="Technothon '22"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <Text fontWeight="semibold">Write something about the hackathon?</Text>
        {error === 'description' && data.description.length === 0 && (
          <AlertInput title="You missed the most important part!" />
        )}
        <Textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          placeholder="This can include details like history about the hackathon, rules and regulations, etc"
        />
        <HStack justify="flex-end">
          <Text>{500 - data.description.length} characters left</Text>
        </HStack>

        {/* Social links of the organizer */}
        <Text
          fontWeight="semibold"
          textAlign={'center'}
          style={{
            marginTop: '40px',
          }}
        >
          Where can the participants find about you?
        </Text>

        <Stack
          width="50%"
          style={{
            margin: '20px auto',
          }}
        >
          {error === 'whatsapp' && data.whatsapp === '' && (
            <AlertInput title="Atleast a whatsapp invite should be available" />
          )}
          <InputGroup>
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputLeftElement children={<BsWhatsapp />} pointerEvents="none" />
            <Input
              type="text"
              placeholder="Link to Whatsapp invite"
              value={data.whatsapp}
              onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputLeftElement children={<BsTwitter />} pointerEvents="none" />
            <Input
              type="text"
              placeholder="BrodasGeo"
              value={data.twitter}
              onChange={(e) => setData({ ...data, twitter: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputLeftElement children={<BsInstagram />} pointerEvents="none" />
            <Input
              type="text"
              placeholder="gaurangtari"
              value={data.instagram}
              onChange={(e) => setData({ ...data, instagram: e.target.value })}
            />
          </InputGroup>
        </Stack>

        {/* Hackathon details - venue, dates, entry-fee?, organizer site */}
        <Text
          fontWeight="semibold"
          textAlign={'center'}
          style={{
            marginTop: '40px',
          }}
        >
          Now lets get some more details about the hackathon?
        </Text>

        <Stack
          style={{
            margin: '20px auto',
          }}
        >
          {error === 'details' ? (
            <AlertInput title="Looks like something is missing" />
          ) : (
            error === 'details-error' && (
              <AlertInput title="Starting date can't be after the end date!" />
            )
          )}
          <HStack>
            <Text>State</Text>
            <Input
              value={data.state}
              onChange={(e) => setData({ ...data, state: e.target.value })}
              placeholder="Goa"
            />
            <Text>City</Text>
            <Input
              placeholder="Ponda"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </HStack>

          {/* Start and End dates */}
          <HStack>
            <Text>From</Text>
            <Input
              type="date"
              value={data.startDate}
              onChange={(e) => setData({ ...data, startDate: e.target.value })}
            />
            <Text>To </Text>
            <Input
              type="date"
              value={data.endDate}
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
            />
          </HStack>

          {/* Fees and Page link */}
          <HStack>
            <InputGroup>
              {/*  eslint-disable-next-line react/no-children-prop */}
              <InputLeftAddon children="$" />
              <Input
                placeholder="Entry Fee?"
                value={data.fee}
                onChange={(e) => setData({ ...data, fee: e.target.value })}
                type="text"
              />
            </InputGroup>
            <InputGroup>
              {/*  eslint-disable-next-line react/no-children-prop */}
              <InputLeftAddon children="🔗" />
              <Input
                placeholder="https://team-cursor.com"
                type="url"
                value={data.organiserPage}
                onChange={(e) =>
                  setData({ ...data, organiserPage: e.target.value })
                }
              />
            </InputGroup>
          </HStack>
        </Stack>

        <Stack
          style={{
            margin: '50px auto',
          }}
          width="70%"
          textAlign="center"
        >
          <Text fontWeight={'semibold'}>
            Now add some FaQs for the participants
          </Text>

          {error === 'faq' && (
            <AlertInput title="You need to add atleast one Question" />
          )}
          <FormLabel>Question 1 *</FormLabel>
          <Input
            placeholder="Will there be any accomodation"
            value={data.faqs[0].question}
            onChange={(e) =>
              setData({
                ...data,
                faqs: [
                  { question: e.target.value, answer: data.faqs[0].answer },
                ],
              })
            }
          />

          <FormLabel>Answer 1 *</FormLabel>
          <Input
            placeholder="Yes, we will provide accomodation"
            value={data.faqs[0].answer}
            onChange={(e) =>
              setData({
                ...data,
                faqs: [
                  { question: data.faqs[0].question, answer: e.target.value },
                ],
              })
            }
          />

          {dynamicForm()}
        </Stack>

        <Button
          isLoading={loading}
          onClick={sendData}
          width="20%"
          style={{
            margin: '0 auto',
          }}
        >
          Post Event 🎉
        </Button>
      </Stack>
    </VStack>
  );
}

export default NewEventForm;
